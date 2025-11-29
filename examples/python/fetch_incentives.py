"""
ZOE API - Fetch State Incentives Example (Python)

This example demonstrates fetching SGIP incentive data
from the ZOE free tier via jsDelivr CDN.
"""

import requests
import json
from typing import Optional, Dict, Any


def fetch_sgip_incentives() -> Dict[str, Any]:
    """
    Fetch SGIP incentive data from ZOE free tier.

    Returns:
        dict: SGIP incentive program data
    """
    url = 'https://cdn.jsdelivr.net/gh/securedcarbon/zoe-data-public@main/samples/state-incentives/sgip-current-step.json'

    try:
        response = requests.get(url)
        response.raise_for_status()

        incentives = response.json()

        print('SGIP Incentive Data:')
        print(f"Program: {incentives['program_name']}")
        print(f"Current Rate: ${incentives['rate']}/kWh")
        print(f"Budget Remaining: ${incentives['budget_remaining']:,}")
        print(f"Eligible Sectors: {', '.join(incentives['eligible_sectors'])}")

        return incentives
    except requests.RequestException as e:
        print(f"Error fetching SGIP data: {e}")
        raise


def fetch_census_tract(geoid: str) -> Optional[Dict[str, Any]]:
    """
    Fetch census tract data from ZOE free tier.

    Args:
        geoid: 11-digit FIPS code

    Returns:
        dict: Census tract data, or None if not found in sample
    """
    url = 'https://cdn.jsdelivr.net/gh/securedcarbon/zoe-data-public@main/samples/census/tracts-ca-sample.json'

    try:
        response = requests.get(url)
        response.raise_for_status()

        tracts = response.json()

        tract = next((t for t in tracts if t['geoid'] == geoid), None)

        if not tract:
            print(f"Tract {geoid} not found in free tier sample. Upgrade to Pro for full coverage.")
            return None

        print(f"Census Tract {geoid}:")
        print(f"County: {tract['county']}, {tract['state']}")

        return tract
    except requests.RequestException as e:
        print(f"Error fetching census data: {e}")
        raise


def main():
    """Example usage of ZOE API free tier."""
    print("=== ZOE API Free Tier Example ===\n")

    # Fetch SGIP incentives
    sgip = fetch_sgip_incentives()
    print("\n---\n")

    # Fetch a specific census tract
    tract = fetch_census_tract('06037260100')  # Los Angeles tract

    if tract and sgip:
        print("\n=== Combined Analysis ===")
        print(f"For tract {tract['geoid']} in {tract['county']}:")
        print(f"SGIP incentive available: ${sgip['rate']}/kWh")
        print("\nUpgrade to Pro for full demographic data and real-time incentive tracking!")


if __name__ == '__main__':
    main()
