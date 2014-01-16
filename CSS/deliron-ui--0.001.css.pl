#!/usr/bin/env perl

use strict;
use warnings;
use feature 'say';
use Data::Dumper;
use File::Find::Rule;
use CSS::Minifier qw/minify/;
use File::Slurp qw/read_file/;

my $is_minify = grep /\Aminify\z/, @ARGV;
my $is_list_files_only = grep /\Alist\z/, @ARGV;

my @files = File::Find::Rule->name('*.css')->file->in('SOURCE');

if ( $is_list_files_only ) {
    say for reverse @files;
    exit;
}

my $all_css;
for ( reverse @files ) {
    $all_css .= read_file($_) . "\n\n";
}

print "Content-type: text/css\n\n";
print +( $is_minify
            ? minify( input => $all_css, stripDebug => 1 )
            : $all_css
        ) . "\n";