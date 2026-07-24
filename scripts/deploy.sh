#!/usr/bin/env bash
set -euo pipefail

REMOTE_HOST="${1:-${AWS_HOST:-}}"
REMOTE_USER="${2:-${AWS_USER:-}}"
REMOTE_PATH="${3:-/var/www/gym-app}"

if [[ -z "$REMOTE_HOST" || -z "$REMOTE_USER" ]]; then
  echo "Usage: ./scripts/deploy.sh <ec2-host> <ec2-user> [remote-path]"
  exit 1
fi

echo "Deploying build to $REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH"
ssh -o StrictHostKeyChecking=no "$REMOTE_USER@$REMOTE_HOST" "mkdir -p $REMOTE_PATH"
scp -o StrictHostKeyChecking=no -r dist/* "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH/"
ssh -o StrictHostKeyChecking=no "$REMOTE_USER@$REMOTE_HOST" "sudo systemctl reload nginx || true"
