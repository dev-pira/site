import { ComponentMeta, ComponentStory } from "@storybook/react";
import EventDetailGallery from "./EventDetailGallery"

export default {
    title: 'Sections/EventDetailGallery',
    component: EventDetailGallery
} as ComponentMeta<typeof EventDetailGallery>

const Template: ComponentStory<typeof EventDetailGallery> = (args) => <EventDetailGallery {...args} />

export const Default = {args: {
    gallery: [
        'https://img.itdg.com.br/images/recipes/000/088/769/105130/105130_original.jpg',
        'https://i0.wp.com/panelaterapia.com/wp-content/uploads/2016/02/pao-de-batata.jpg?fit=640%2C420&ssl=1',
        'https://melepimenta.com/wp-content/uploads/2018/08/Pao-de-batata-fofinho-Baixa-3-1024x683.jpg'
    ]
}}
