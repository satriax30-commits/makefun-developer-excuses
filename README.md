# Make the AI Judge Laugh: Developer Excuses

[![make.fun](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3.svg)](https://make.fun/competitions/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/satriax30-commits/makefun-developer-excuses/rank.svg)](https://make.fun/competitions/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/satriax30-commits/makefun-developer-excuses/reward.svg)](https://make.fun/competitions/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)

One funny single-line excuse a developer gives when code breaks in production.
This program writes it to `/output/entry.txt`:

> My tests passed. All three of them. Nobody said they had to be the right three.

## Run

```sh
node main.ts
```

Node 22, standard library only, no network, no wall-clock, no randomness —
the output is fully deterministic.

## Entry

`main.ts` validates the entry (1–200 characters, single line, non-blank),
writes it to `/output/entry.txt`, then reads the file back and confirms the
bytes match exactly.

[Play on make.fun](https://make.fun/r/kssgyf66)
