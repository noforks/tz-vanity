#!/usr/bin/env node
"use strict";
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const validChars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'.split('');
const validFirstChar = 'KLMNPQRSTUVWXYZabcdefghi'.split('');
function perms(input) {
    // From https://stackoverflow.com/questions/27992204/find-all-lowercase-and-uppercase-combinations-of-a-string-in-javascript
    const letters = input.split("");
    const permCount = 1 << input.length;
    const perms = [];
    for (let perm = 0; perm < permCount; perm++) {
        letters.reduce((perm, letter, i) => {
            letters[i] = (perm & 1) ? letter.toUpperCase() : letter.toLowerCase();
            return perm >> 1;
        }, perm);
        const result = letters.join("");
        if (validFirstChar.includes(letters[0])) {
            if (validWord(result)) {
                perms.push(result);
            }
        }
    }
    return perms;
}
function printCmd(name, x) {
    const words = x.join(' ');
    console.log(`tezos-client gen vanity keys ${name} matching ${words} --prefix`);
}
function validWord(word) {
    const letter = word.split('');
    for (var i = 0; i < letter.length; i++) {
        var c = letter[i];
        if (!validChars.includes(c)) {
            return false;
        }
    }
    return true;
}
function validateSeed(seed) {
    const seeds = seed.split('');
    for (var i = 0; i < seeds.length; i++) {
        var c = seeds[i];
        if (!validChars.includes(c)) {
            throw new Error(`Seed word can not contain "${c}"`);
        }
    }
}
const seed = argv.seed;
validateSeed(seed);
const words = perms(seed);
printCmd(argv.name, words);
