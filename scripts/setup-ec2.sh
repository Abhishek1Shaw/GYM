#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/var/www/gym-app"

sudo apt-get update
sudo apt-get install -y nginx
sudo mkdir -p "$APP_DIR"

sudo tee /etc/nginx/sites-available/gym-app >/dev/null <<'EOF'
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;

    root /var/www/gym-app;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
EOF

sudo ln -sf /etc/nginx/sites-available/gym-app /etc/nginx/sites-enabled/default
sudo systemctl enable nginx
sudo systemctl restart nginx

echo "EC2 setup complete. Your app should be available on port 80."
