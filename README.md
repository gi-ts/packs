# GJS "packs"

These "packs" provide import definitions for the various GI types.

## How to use

1. Add `./node_modules/@gi-types` to `typeRoots` in your `tsconfig.json` or `jsconfig.json`
2. Add `gjs-environment` from `@gi-types/gjs-environment` to your `types`.
3. Add `base-types` from `@gi-types/base-types`, `gtk3-types` from `@gi-types/gtk3-types`, or `gtk4-types` from `@gi-types/gtk4-types`.

Example `tsconfig.json`

```json

{
    "compilerOptions": {
        "strict": true,
        "typeRoots": [
            "./node_modules/@types",
            "./node_modules/@gi-types"
        ],
        "types": [
            "gjs-environment",
            "base-types"
        ],
        "lib": [
            "ES2019"
        ],
        "allowSyntheticDefaultImports": true,
    },
    "include": [
        "main.ts"
    ]
}
```

