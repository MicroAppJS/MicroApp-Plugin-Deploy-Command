'use strict';

module.exports = {
    hooks: {
        'before:bump': [
            'npm test',
        ],
    },
    git: {
        requireUpstream: false,
        commitMessage: 'release: v${version}',
        tagName: 'v${version}',
        push: false,
    },
    github: {
        release: true,
        releaseName: 'Deploy %s Released!',
        draft: true,
    },
    plugins: {
        '@release-it/conventional-changelog': {
            preset: 'angular',
        },
    },
};