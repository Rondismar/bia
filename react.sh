#!/bin/bash
function build() {
    API_URL=http://44.200.163.49
    echo "Building React application..."
    npm install
    VITE_API_URL=$API_URL npm --prefix client run build
    echo "Build finalizado"
    cd ..
}
build
