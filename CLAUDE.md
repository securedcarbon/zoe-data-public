# ZOE Data Public - Agent Onboarding

**Repository:** securedcarbon/zoe-data-public
**Visibility:** Public
**Purpose:** Sample data, schemas, and documentation for ZOE API free tier
**Last Updated:** 2025-11-29

---

## Quick Start

This is the **public-facing** repository for the ZOE Data Platform. It contains:
- Sample datasets (100 records each)
- JSON schemas (open standard)
- API documentation
- Integration examples

**Important:** This is NOT the working repository for data validation sprints.

---

## For ZOE Team Members

If you're working on data validation, acquisition, or processing, you should be in the **private repository**:

```bash
# Work from here instead:
cd /Users/tac/Documents/GitHub/SecuredCarbon/zoe-data
```

The private `zoe-data` repository contains:
- Full datasets
- Validation reports
- Sprint prompts
- Sync scripts
- Complete CLAUDE.md with agent onboarding

---

## What This Repo Contains

### Schemas (`schemas/`)
- JSON Schema definitions for all data types
- Licensed under MIT (open standard)
- Referenced by both public samples and private full datasets

### Samples (`samples/`)
- Limited sample data (100 records each)
- Licensed under CC-BY 4.0
- Powers the Free tier of ZOE API
- Delivered via jsDelivr CDN

### Documentation (`docs/`)
- Getting started guides
- API endpoint reference
- Data dictionary
- Upgrade information

### Examples (`examples/`)
- JavaScript integration examples
- Python integration examples
- cURL commands

---

## Updating This Repository

**Source of Truth:** Private `zoe-data` repository

**Update Process:**
1. Data is validated in private repo
2. Sample data is generated via `scripts/generate-samples.sh`
3. Samples are copied to this public repo
4. Schemas are synced from private repo
5. Documentation is updated
6. Changes are committed and tagged

**Do NOT manually edit sample data in this repo.** Always generate from the private repo.

---

## CDN Access Pattern

All files in this repo are accessible via jsDelivr CDN:

```
https://cdn.jsdelivr.net/gh/securedcarbon/zoe-data-public@{version}/{path}
```

Examples:
```
# Latest version (main branch)
https://cdn.jsdelivr.net/gh/securedcarbon/zoe-data-public@main/schemas/tract.schema.json

# Specific release
https://cdn.jsdelivr.net/gh/securedcarbon/zoe-data-public@v2024.1/samples/census/tracts-ca-sample.json
```

---

## Release Process

1. Private repo validated data → generate samples
2. Copy samples to public repo
3. Update docs if needed
4. Commit to main
5. Tag release: `git tag -a v2024.N -m "Release message"`
6. Push: `git push --tags`
7. jsDelivr automatically picks up new version

---

## Support

**For users of this public repo:**
- Open GitHub Issues for questions
- See docs/getting-started.md for setup help

**For ZOE team members:**
- Work from private `zoe-data` repository
- Read full CLAUDE.md there for complete onboarding
- Contact ZOE CPO for sprint assignments

---

## Related Repositories

- **zoe-data (private)** - Full datasets, validation, working repo
- **bess-calculator (private)** - BESS Calculator application
- **zoe-data-public (this repo)** - Public samples and docs

---

*ZOE Data Platform - Powering location-based BESS project planning*
