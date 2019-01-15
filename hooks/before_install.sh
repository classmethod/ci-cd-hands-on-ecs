#!/usr/bin/env bash

app_path="/usr/src/app/src/index.js"

app_src_dir_path="/usr/src/app"
app_log_dir_path="/var/log/app"

forever stop "$app_path"

mkdir -p "$app_src_dir_path" "$app_log_dir_path"