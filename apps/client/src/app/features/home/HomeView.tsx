import { Card, CardContent } from '@mui/material';

export function HomeView() {
  return (
    <Card>
      <CardContent>
        <h3>A note</h3>
        <p>
          To be clear, I (Kevin Tamlyn) have been a full-time <i>Angular Tech Lead</i> for the past five years (mostly within a
          full-stack context).
        </p>
        <p>
          Prior to this I have worked with React, but when I started this
          exercise I was cold on React. If my submission is directly compared
          with full-time senior React developers, I may be at a serious
          disadvantage. (Other non-React work samples are available at request.)
        </p>
        <h4>Items that could use further work</h4>
        <ul>
          <li>Imply a specific state management approach</li>
          <li>
            Implement a service worker and request library (such as Axios) to
            better simulate an external endpoint.
          </li>
          <li>
            Separate the TrackingRecordService from the KitManagement component
          </li>
          <li>Use better font</li>
          <li>
            Place relevant styles near the components that consume those styles.
          </li>
          <li>Implement table view on search page</li>
          <li>Perhaps use the mock user data.</li>
        </ul>
        <h4>Addressing Scaling</h4>
        Though I am unsure what is being sought out here, there are a few ideas that come to mind that could be added to this implementation for the purpose of scaling.
        <ul>
          <li>
            Virtual scrolling mechanism that renders only the visible elements.
          </li>
          <li>
            Limit elements displayed to a certain number and provide a "load
            more" button if required
          </li>
          <li>
            Apply the filter on the backend rather than the frontend, and
            paginate the data.
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
