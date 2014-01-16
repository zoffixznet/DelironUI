#!/usr/bin/env perl

use strict;
use warnings;
use Data::Dumper;
use File::Find::Rule;
use JavaScript::Minifier qw/minify/;
use File::Slurp qw/read_file/;

my $is_minify = grep /\Aminify\z/, @ARGV;

my @files = File::Find::Rule->name('*.js')->file->in('SOURCE');

my $all_js;
for ( @files ) {
    $all_js .= read_file $_;
}

print "Content-type: text/javascript\n\n";
print +( $is_minify
            ? minify( input => $all_js, stripDebug => 1 )
            : $all_js
        ) . "\n";