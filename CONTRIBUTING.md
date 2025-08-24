# Contributing

New features and major changes will probably be made solely by @crqch in accordance with @SwingTheVine, to maintain the project's goal.

Anyway, things that are needed to be done can be accessed in the 'Issues' tab of the repository.

If you do contribute code, then the it should meet those criteria:

- complex elements/heavy logic are extracted to separate components/functions,
- good code readability and quality,
- added 'en' locale keys for new components/pages (instead of leaving plain text).

## Localization

Providing translations for new languages is currently the most important task.

### Translating an existing locale

To translate an existing locale, you should go to `packages/client/messages/en.json` file and compare it with your locale (`packages/client/messages/[lang].json`). Then, copy over the keys that your locale lacks. If you are working on the `master` branch, you can tell which translations are missing by visiting the website, picking your locale, and seeing that something isn't translated (and is in english).

### Adding a new locale

To add a new locale, you should go to `packages/client/messages/en.json` file, copy the contents of it, create a new file in the same directory (`packages/client/messages/`), with name `[locale].json`, where `[locale]` is the code value of your language from [this table](https://www.unicode.org/cldr/charts/47/supplemental/languages_and_scripts.html).

Next, change the `NAME` and `EMOJI` values to your language name written in this language (for example: English, Polski, Español) and a flag emoji of a country that links to the language.

Then, without changing the keys (like `home_section1_title` or `NAME`) translate the values to your language.

### Translating Criteria

- You must keep any `a`, `p`, `span` tags etc. including all properties.

> Example

```
<a href=\"telemetry\" class=\"href\">used concurrently by 20,000+ users</a>
```

gets translated to

```
<a href=\"telemetry\" class=\"href\">używany przez ponad 20 000 użytkowników</a>
```

Tags are everything in between of arrow brackets: <>
