import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../../data';
import EventSummary from '../../components/eventDetails/EventSummary';
import EventLogistics from '../../components/eventDetails/EventLogistics';
import EventContent from '../../components/eventDetails/EventContent';
import ErrorAlert from '../../components/ui/ErrorAlert';

export default function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;

  const event = getEventById(eventId);

  if (!event) {
    return ( 
      <ErrorAlert>
        <p>No Event Found</p>
      </ErrorAlert>
    )
  }

  return (
    <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics 
            date={event.date}
            address={event.location}
            image={event.image}
            imageAlt={event.title}
        />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
    </Fragment>
  );
}
