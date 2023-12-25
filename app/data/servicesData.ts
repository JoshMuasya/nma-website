import { ServiceCardType } from "../interface";

const servicesData: ServiceCardType[] = Array.from({ length: 10 }, (_, index) => ({
    source: `url${index + 1}`,
    alt: `Service ${index + 1}`,
    title: `Service ${index + 1}`,
    content: `Description of Service ${index + 1}`,
    link: `Link ${index + 1}`,
    cardClass: `custom-card-class-${index + 1}`, // Add your custom card class if needed
}));

export default servicesData;