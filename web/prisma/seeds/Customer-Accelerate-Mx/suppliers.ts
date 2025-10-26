export default async function (prisma, customerId) {
   console.log('Seeding suppliers...');

   const suppliers = [
      {
         id: 'cm7kma8r4000b08l8agkc1g35',
         name: 'AeroGlobal Supplies',
         contact_person: 'John Stevenson',
         primary_phone: '+1-555-987-6543',
         primary_email: 'sales@aeroglobal.com',
         services_provided: 'Aircraft Parts & Maintenance Equipment',
         is_mro: true,
         rating: 'FIVE',
         notes: 'One-stop shop for most aviation components',
         deleted: false,
      },
      {
         id: 'cm7kmaeua000c08l847i9egva',
         name: 'SkyTech Aviation',
         contact_person: 'Rebecca Moore',
         primary_phone: '+1-555-234-5678',
         primary_email: 'contact@skytechaviation.com',
         services_provided: 'Avionics & Electrical Components',
         is_mro: false,
         rating: 'FOUR',
         notes: 'Specializes in avionics and lighting systems',
         deleted: false,
      },
      {
         id: 'cm7kmaka6000d08l8grit648d',
         name: 'FlightReady Parts',
         contact_person: 'Michael Carter',
         primary_phone: '+1-555-765-4321',
         primary_email: 'info@flightreadyparts.com',
         services_provided: 'Landing Gear & Hydraulic Systems',
         is_mro: false,
         rating: 'THREE',
         notes: 'Known for high-quality landing gear components',
         deleted: false,
      },
      {
         id: 'cm7kmas42000e08l8g9izbsgg',
         name: 'EngineMasters',
         contact_person: 'Linda Wright',
         primary_phone: '+1-555-345-6789',
         primary_email: 'support@enginemasters.com',
         services_provided: 'Engine & Fuel System Parts',
         is_mro: true,
         rating: 'FIVE',
         notes: 'Leading provider of aircraft engine components',
         deleted: false,
      },
      {
         id: 'cm7kmayoc000f08l8e6h10bzp',
         name: 'AeroFast Hardware',
         contact_person: 'David Reynolds',
         primary_phone: '+1-555-456-7890',
         primary_email: 'sales@aerofasthardware.com',
         services_provided: 'Fasteners & Hardware',
         is_mro: false,
         rating: 'THREE',
         notes: 'Best selection of aerospace-grade fasteners',
         deleted: false,
      },
   ];

   for (const supplier of suppliers) {
      await prisma.supplier.upsert({
         where: { id: supplier.id },
         update: {},
         create: supplier,
      });

      await prisma.customerToSupplierMap.upsert({
         where: {
            customer_id_supplier_id: {
               customer_id: customerId,
               supplier_id: supplier.id,
            },
         },
         update: {},
         create: {
            customer_id: customerId,
            supplier_id: supplier.id,
         },
      });
   }
}
