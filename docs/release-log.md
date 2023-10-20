# Release Log

## 2023-10-16

Type: Small tweak

Part of: `@hubspot/cms-components@0.10.4`

Added `data-hs-island` attribute to island wrapper elements.

---

Type: Bug Fix

Part of: `@hubspot/cms-components@0.10.3`

Change: Support `locked` in FieldGroup and RepeatedFieldGroup

---

Type: Bug Fix

Part of: `@hubspot/cms-components@0.10.3`

Change: Support `helpText` and `inlineHelpText` in `FieldGroup` and `RepeatedFieldGroup`

## 2023-10-02

Type: Bug Fix

Part of: `@hubspot/cms-components@0.10.2`

Change: Correct types for SpacingLimitType, SpacingValueType, and Advanced Visibility

---

Type: Bug Fix

Part of: `@hubspot/cms-components@0.10.2`

Change: Add support for visibility in RepeatedFieldGroup

---

Type: Enhancement

Part of: `@hubspot/cms-components@0.10.2`

Change: Add `useIsDebug`, `logInfoDebugOnly`, `logWarnDebugOnly`, and `logErrorDebugOnly`

Example Usage: When visiting your page, `useIsDebug` will return true and the logging functions with log when you set `hsDebug` to true in your query parameters. e.g. "mydomain.com/home?hsDebug=true". Note that use of `hsDebug` will disable pre-rendering for that page while it is in use.

```javascript
import { useIsDebug, logInfoDebugOnly } from '@hubspot/cms-components'

function PicardComponent() {
  const isDebug = useIsDebug();

  const picardCommand = isDebug ? 'make it so' : 'engage';

  return (
    <>
      <h1>{`${picardCommand}`}</h1>
    </>
  );
}

const TestLogInfoDebugComponent = ({ logArgs }) => {
  logInfoDebugOnly(...logArgs);

  return null;
};
```

---

Type: Bug Fix

Part of: `@hubspot/cms-dev-server@0.10.1`

Change: Add babel macros support to storybook server

## 2023-09-26

Type: Enhancement

Part of: `@hubspot/cms-dev-server@0.10.0`

Added `help/--help` command to the development server.

Example usage:

```sh
>hs-cms-dev-server help

              HubSpot CMS Dev Server

Usage: hs-cms-dev-server <path> [options]

Mandatory:
    <path>                  Path to the directory containing your assets.

Options:
    -c, --config            Path to alternate hubspot.config.yaml configuration.
    -a, --account           The account name or id to use for the dev server.
    --ssl                   Enables SSL for the dev server, serving it over an https:// URL.
    --storybook             Launches a Storybook dev server.

For more information on HubSpot CMS JS Rendering, visit:
https://github.hubspot.com/cms-js-building-block-examples/

```

---

Type: Bug Fix

Part of: `@hubspot/cms-components@0.10.0`

Change: Add support for visibility in FieldGroup

---

Type: Bug Fix

Part of: `@hubspot/cms-components@0.10.0`

Change: Add support for `limits` for the "Spacing" field type.

---

Type: Bug Fix

Part of: `@hubspot/cms-components@0.10.0`

Change: Add support for `resizable`, `show_advanced_options`, and `show_preview` for the "Video" field type.

---

Type: Enhancement

Part of: Platform Release

Change: Added support for `meta.json` icons via file imports

Example usage:

``` javascript
import reactIcon from './react-icon.svg';

export const meta = {
  label: `Module`,
  icon: reactIcon,
};
```