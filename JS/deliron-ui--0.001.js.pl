#!/usr/bin/env perl

use strict;
use warnings;
use feature 'say';
use Data::Dumper;
use File::Find::Rule;
use JavaScript::Minifier qw/minify/;
use File::Slurp qw/read_file/;

my $is_minify = grep /\Aminify\z/, @ARGV;
my $is_list_files_only = grep /\Alist\z/, @ARGV;
my $no_content_type = grep /\Anocontenttype\z/, @ARGV;

my @files = File::Find::Rule->name('*.js')->file->in('SOURCE');

if ( $is_list_files_only ) {
    say for reverse @files;
    exit;
}

my $all_js;
for ( reverse @files ) {
    $all_js .= read_file($_) . "\n\n";
}

print "Content-type: text/javascript\n\n"
    unless $no_content_type;

print +( $is_minify
            ? minify( input => $all_js, stripDebug => 1 )
            : $all_js
        ) . "\n";