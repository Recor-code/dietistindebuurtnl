import { db } from '../../lib/db';
import { cities, coaches, faqItems, blogPosts } from '../../shared/schema';
import { allCities, adhdStatsTemplate, generateCityTldr } from '../data/cities';

// Sample Dietisten data
const sampleCoaches = [
  {
    name: 'Dr. Sarah van den Berg',
    slug: 'sarah-van-den-berg',
    email: 'sarah@adhdcoach.nl',
    phone: '06-12345678',
    website: 'https://sarahcoaching.nl',
    specialization: 'Diëtiek Coach & Psycholoog',
    description: 'Gespecialiseerd in voedingsadvies voor volwassenen. 15 jaar ervaring in gedragstherapie en coaching.',
    address: 'Hoofdstraat 123',
    rating: 4.8,
    reviewCount: 47,
    isChildFriendly: true,
    weekendAvailable: true,
    onlineAvailable: true,
    inPersonAvailable: true,
    acceptsInsurance: true,
    availabilityStatus: 'available'
  },
  {
    name: 'Mark Jansen',
    slug: 'mark-jansen',
    email: 'mark@focuscoaching.nl',
    phone: '06-87654321',
    specialization: 'Diëtiek Coach',
    description: 'Focus en planningscoach met Diëtiek specialisatie. Helpt bij structuur en organisatie.',
    address: 'Parkweg 45',
    rating: 4.6,
    reviewCount: 32,
    isChildFriendly: false,
    weekendAvailable: false,
    onlineAvailable: true,
    inPersonAvailable: true,
    acceptsInsurance: false,
    availabilityStatus: 'available'
  },
  {
    name: 'Lisa de Vries',
    slug: 'lisa-de-vries',
    email: 'lisa@kindcoaching.nl',
    phone: '06-11223344',
    specialization: 'Gedragstherapeut',
    description: 'Gedragstherapeut gespecialiseerd in Diëtiek bij kinderen en jongeren.',
    address: 'Schoolstraat 67',
    rating: 4.9,
    reviewCount: 63,
    isChildFriendly: true,
    weekendAvailable: true,
    onlineAvailable: false,
    inPersonAvailable: true,
    acceptsInsurance: true,
    availabilityStatus: 'busy'
  }
];

// Sample FAQ items
const sampleFAQ = [
  {
    question: 'Wat is het verschil tussen een Dietist en een psycholoog?',
    answer: 'Een Dietist richt zich vooral op praktische vaardigheden zoals planning, organisatie en tijdmanagement. Een psycholoog kan ook therapeutische behandeling bieden voor bijkomende problematiek zoals angst of depressie.',
    category: 'Algemeen',
    order: 1
  },
  {
    question: 'Wordt voedingsadvies vergoed door de zorgverzekering?',
    answer: 'voedingsadvies wordt niet standaard vergoed vanuit de basisverzekering. Sommige aanvullende verzekeringen vergoeden wel een deel van de kosten. Check dit altijd bij je verzekeraar.',
    category: 'Vergoeding',
    order: 2
  },
  {
    question: 'Hoe lang duurt een voedingsadvies traject gemiddeld?',
    answer: 'Een coaching traject duurt gemiddeld 3-6 maanden, afhankelijk van je doelen en voortgang. De meeste coaches werken met sessies van 45-60 minuten, 1x per week of om de week.',
    category: 'Proces',
    order: 3
  },
  {
    question: 'Kan ik online voedingsadvies krijgen?',
    answer: 'Ja, veel Dietisten bieden ook online coaching aan via videobellen. Dit kan handig zijn als er geen coach in je buurt is of als online beter uitkomt.',
    category: 'Online',
    order: 4
  },
  {
    question: 'Wat moet ik verwachten van de eerste sessie?',
    answer: 'In de eerste sessie bespreek je je hulpvraag, doelen en verwachtingen. De coach legt uit hoe hij/zij werkt en samen maken jullie een plan voor de coaching.',
    category: 'Proces',
    order: 5
  }
];

export async function seedDatabase() {
  try {
    console.log('Starting database seeding...');

    // Insert cities
    console.log('Inserting cities...');
    const insertedCities = await db.insert(cities).values(
      allCities.map(city => ({
        name: city.name,
        slug: city.slug,
        province: city.province,
        country: city.country,
        population: city.population,
        latitude: city.latitude.toString(),
        longitude: city.longitude.toString(),
        adhdStats: JSON.stringify({
          ...adhdStatsTemplate,
          lastUpdated: new Date().toISOString()
        }),
        tldr: generateCityTldr(city.name)
      }))
    ).returning();

    console.log(`Inserted ${insertedCities.length} cities`);

    // Insert coaches for each city (sample data)
    console.log('Inserting coaches...');
    const coachInserts = [];
    
    for (const city of insertedCities.slice(0, 20)) { // First 20 cities get coaches
      for (const coach of sampleCoaches) {
        coachInserts.push({
          ...coach,
          cityId: city.id,
          latitude: (parseFloat(city.latitude!) + (Math.random() - 0.5) * 0.01).toString(),
          longitude: (parseFloat(city.longitude!) + (Math.random() - 0.5) * 0.01).toString(),
          rating: coach.rating.toString(),
        });
      }
    }

    await db.insert(coaches).values(coachInserts);
    console.log(`Inserted ${coachInserts.length} coaches`);

    // Insert FAQ items
    console.log('Inserting FAQ items...');
    await db.insert(faqItems).values(sampleFAQ);
    console.log(`Inserted ${sampleFAQ.length} FAQ items`);

    // Insert sample blog posts
    console.log('Inserting blog posts...');
    const blogInserts = insertedCities.slice(0, 10).map((city, index) => ({
      title: `Diëtiek Coaching in ${city.name}: Wat Je Moet Weten`,
      slug: `adhd-coaching-${city.slug}`,
      content: `<h2>Diëtiek Coaching in ${city.name}</h2><p>Ben je op zoek naar voedingsadvies in ${city.name}? In dit artikel bespreken we alles wat je moet weten over Diëtiek ondersteuning in jouw stad.</p><h3>Beschikbare Diëtiek Coaches</h3><p>In ${city.name} zijn verschillende ervaren Dietisten actief die je kunnen helpen met praktische vaardigheden...</p>`,
      excerpt: `Ontdek alles over voedingsadvies mogelijkheden in ${city.name}. Van lokale coaches tot specialisaties.`,
      metaDescription: `voedingsadvies in ${city.name} - Vind ervaren coaches, bekijk reviews en vergelijk specialisaties in jouw stad.`,
      cityId: city.id,
      province: city.province,
      tags: JSON.stringify(['Diëtiek', 'coaching', city.name, city.province]),
      publishedAt: new Date()
    }));

    await db.insert(blogPosts).values(blogInserts);
    console.log(`Inserted ${blogInserts.length} blog posts`);

    console.log('Database seeding completed successfully!');
    return { success: true };
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}