/**
 * @desc UI Kit 시멘틱 릴리즈 설정 파일
 */
module.exports = {
  branches: [
    {
      "name": "master"
    }
  ],
  plugins: [
    ["@semantic-release/commit-analyzer", {
      "preset": "angular",
      "releaseRules": [
        {"type": "chore", "release": "patch"},
        {"type": "refactor", "release": "patch"},
        {"type": "style", "release": "patch"}
      ],
      "parserOpts": {
        "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES"]
      }
    }],
    "@semantic-release/release-notes-generator",
    ["@semantic-release/npm", {
      "pkgRoot": "./ui-kit/dist"
    }],
    [
      "@semantic-release/git",
      {
        "assets": ["package.json"]
      }
    ],
    "@semantic-release/github"
  ]
}