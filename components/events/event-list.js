import EventItem from "./event-item";

import clases from './event-list.module.css'

const EventList = (props) => {
    const { items } = props;

    return (
        <ul className={clases.list}>
            {items.map(event => (
                <EventItem
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    location={event.location}
                    date={event.date}
                    image={event.image}
                />
            ))}
        </ul>
    )
}

export default EventList