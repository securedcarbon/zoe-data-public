/**
 * ZOE API - Fetch State Incentives Example (JavaScript)
 *
 * This example demonstrates fetching SGIP incentive data
 * from the ZOE free tier via jsDelivr CDN.
 */

async function fetchSGIPIncentives() {
  const url = 'https://cdn.jsdelivr.net/gh/securedcarbon/zoe-data-public@main/samples/state-incentives/sgip-current-step.json';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const incentives = await response.json();

    console.log('SGIP Incentive Data:');
    console.log(`Program: ${incentives.program_name}`);
    console.log(`Current Rate: $${incentives.rate}/kWh`);
    console.log(`Budget Remaining: $${incentives.budget_remaining.toLocaleString()}`);
    console.log(`Eligible Sectors: ${incentives.eligible_sectors.join(', ')}`);

    return incentives;
  } catch (error) {
    console.error('Error fetching SGIP data:', error);
    throw error;
  }
}

async function fetchCensusTract(geoid) {
  const url = 'https://cdn.jsdelivr.net/gh/securedcarbon/zoe-data-public@main/samples/census/tracts-ca-sample.json';

  try {
    const response = await fetch(url);
    const tracts = await response.json();

    const tract = tracts.find(t => t.geoid === geoid);

    if (!tract) {
      console.warn(`Tract ${geoid} not found in free tier sample. Upgrade to Pro for full coverage.`);
      return null;
    }

    console.log(`Census Tract ${geoid}:`);
    console.log(`County: ${tract.county}, ${tract.state}`);

    return tract;
  } catch (error) {
    console.error('Error fetching census data:', error);
    throw error;
  }
}

// Example usage
async function main() {
  console.log('=== ZOE API Free Tier Example ===\n');

  // Fetch SGIP incentives
  const sgip = await fetchSGIPIncentives();
  console.log('\n---\n');

  // Fetch a specific census tract
  const tract = await fetchCensusTract('06037260100'); // Los Angeles tract

  if (tract && sgip) {
    console.log('\n=== Combined Analysis ===');
    console.log(`For tract ${tract.geoid} in ${tract.county}:`);
    console.log(`SGIP incentive available: $${sgip.rate}/kWh`);
    console.log('\nUpgrade to Pro for full demographic data and real-time incentive tracking!');
  }
}

// Run if executed directly
if (typeof require !== 'undefined' && require.main === module) {
  main().catch(console.error);
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    fetchSGIPIncentives,
    fetchCensusTract
  };
}
