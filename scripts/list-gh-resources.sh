#!/bin/bash

# GitHub CLI List Commands - from docs/GITHUB_SETUP.md
# Repository: drswobodziczka/lifegame

echo "=========================================="
echo "GitHub CLI - Listing Commands"
echo "=========================================="
echo ""

# Check if gh is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed"
    echo "Install from: https://cli.github.com/"
    exit 1
fi

echo "✅ GitHub CLI found: $(gh --version | head -n1)"
echo ""

# ==========================================
# LIST PROJECTS
# ==========================================
echo "=========================================="
echo "📋 PROJECTS (drswobodziczka)"
echo "=========================================="
gh project list --owner drswobodziczka
echo ""

# ==========================================
# LIST ISSUES
# ==========================================
echo "=========================================="
echo "🐛 ALL ISSUES"
echo "=========================================="
gh issue list -R drswobodziczka/lifegame
echo ""

echo "=========================================="
echo "🆕 OPEN ISSUES"
echo "=========================================="
gh issue list --state open -R drswobodziczka/lifegame
echo ""

echo "=========================================="
echo "✅ CLOSED ISSUES"
echo "=========================================="
gh issue list --state closed -R drswobodziczka/lifegame
echo ""

echo "=========================================="
echo "⭐ FEATURE ISSUES"
echo "=========================================="
gh issue list --label "feature" -R drswobodziczka/lifegame
echo ""

echo "=========================================="
echo "🧪 TESTING ISSUES"
echo "=========================================="
gh issue list --label "testing" -R drswobodziczka/lifegame
echo ""

echo "=========================================="
echo "📚 DOCUMENTATION ISSUES"
echo "=========================================="
gh issue list --label "documentation" -R drswobodziczka/lifegame
echo ""

echo "=========================================="
echo "👤 ISSUES ASSIGNED TO ME"
echo "=========================================="
gh issue list --assignee @me -R drswobodziczka/lifegame
echo ""

# ==========================================
# LIST LABELS
# ==========================================
echo "=========================================="
echo "🏷️  ALL LABELS"
echo "=========================================="
gh label list -R drswobodziczka/lifegame
echo ""

# ==========================================
# JSON OUTPUT (optional)
# ==========================================
read -p "Want to see JSON output? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo "=========================================="
    echo "📋 PROJECTS (JSON)"
    echo "=========================================="
    gh project list --owner drswobodziczka --format json | jq '.'
    echo ""

    echo "=========================================="
    echo "🐛 ISSUES (JSON)"
    echo "=========================================="
    gh issue list -R drswobodziczka/lifegame --format json | jq '.'
    echo ""

    echo "=========================================="
    echo "🏷️  LABELS (JSON)"
    echo "=========================================="
    gh label list -R drswobodziczka/lifegame --format json | jq '.'
    echo ""
fi

echo "=========================================="
echo "✅ Done!"
echo "=========================================="
