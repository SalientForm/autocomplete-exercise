import { Card, CardContent } from '@mui/material';

export function HomeView() {
  return (
    <Card>
      <CardContent>
        <h3></h3>

        <h3>A note</h3>
        <p>
        To be clear, I (Kevin Tamlyn) have been a full-time <i>Angular Tech Lead</i> for the past five
          years (mostly within a full-stack context).</p>
        <p>Prior to this I have worked with React but, when I started this exercise I was
        cold on React. If my submission is directly compared with full-time senior React developers, I may be at a serious disadvantage.
          (Other non-React work samples are available at request.)
        </p>

        <p>Immediate items I would work on further include:</p>

        <ul>
          <li>
            Imply a specific state management approach
          </li>
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
          <li>
            Implement table view on search page
          </li>
          <li>
            Perhaps use the mock user data.
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
