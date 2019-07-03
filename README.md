# include-exclude-match
Verify that a string matches one of include-regexps and doesn't match any of exclude-regexps

## Usage
`match(value, include, exclude)`
```
const match = require('include-exclude-match')
match('banana', [/.*/], [/apple/, /orange/]) // true
match('caterpilar', [/cat/, /dog/], [/caterpilar/]) // false
```
