# This workflow will do a clean install of node dependencies, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: 东东农场
on:
    workflow_dispatch:
    schedule:
        - cron: "0 22,3,9 * * *"
    watch:
        types: [started]
    repository_dispatch:
        types: jd_fruit

jobs:
    build:
        runs-on: ubuntu-latest
        if: github.event.repository.owner.id == github.event.sender.id
        steps:
            - uses: actions/checkout@v1
            - name: Use Node.js 10.x
              uses: actions/setup-node@v1
              with:
                  node-version: 10.x
            - name: npm install
              run: |
                  npm install
            - name: "运行 【东东农场】"
              run: |
                  node jd_fruit.js
        env:
          JD_COOKIE: ${{ secrets.JD_COOKIE }}
          JD_DEBUG: ${{ secrets.JD_DEBUG }}
          JD_USER_AGENT: ${{ secrets.JD_USER_AGENT }}
          PUSH_KEY: ${{ secrets.PUSH_KEY }}
          BARK_PUSH: ${{ secrets.BARK_PUSH }}
          FRUITSHARECODES: ${{ secrets.FRUITSHARECODES }}
          FRUIT_BEAN_CARD: ${{ secrets.FRUIT_BEAN_CARD }}
          TG_BOT_TOKEN: ${{ secrets.TG_BOT_TOKEN }}
          TG_USER_ID: ${{ secrets.TG_USER_ID }}
          FRUIT_NOTIFY_CONTROL: ${{ secrets.FRUIT_NOTIFY_CONTROL }}
          BARK_SOUND: ${{ secrets.BARK_SOUND }}
          DD_BOT_TOKEN: ${{ secrets.DD_BOT_TOKEN }}
          DD_BOT_SECRET: ${{ secrets.DD_BOT_SECRET }}
          IGOT_PUSH_KEY: ${{ secrets.IGOT_PUSH_KEY }}
          QQ_SKEY: ${{ secrets.QQ_SKEY }}
          QQ_MODE: ${{ secrets.QQ_MODE }}
          PUSH_PLUS_TOKEN: ${{ secrets.PUSH_PLUS_TOKEN }}
          PUSH_PLUS_USER: ${{ secrets.PUSH_PLUS_USER }}
