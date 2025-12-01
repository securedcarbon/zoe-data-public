# JSON Schemas

JSON Schema definitions for validating ZOE data files.

## Files

| File | Validates |
|------|-----------|
| `tract.schema.json` | Census tract records |
| `demographics.schema.json` | ACS demographic records |
| `energy-community.schema.json` | Treasury EC records |
| `rate.schema.json` | Utility rate records |
| `incentive.schema.json` | State incentive records |
| `node.schema.json` | ISO pricing node records |
| `lmp.schema.json` | LMP price records |

## Usage

```bash
# Validate a data file
npx ajv validate -s schemas/tract.schema.json -d census/tracts-2024.json

# Validate all census data
for f in census/*.json; do
  npx ajv validate -s schemas/tract.schema.json -d "$f"
done
```

## Schema Standards

- JSON Schema Draft 2020-12
- Required fields enforced
- Format validation for dates, coordinates
- Enum validation for codes

## Adding New Schemas

1. Create schema file following naming convention
2. Include `$id` and `title`
3. Document in this README
4. Add validation to CI pipeline
