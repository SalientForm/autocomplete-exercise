import { Card, CardContent } from '@mui/material';

export function HomeView() {
  return (
    <Card>
      <CardContent>
        <h3></h3>

        <h3>A note about myself</h3>
        <p>
        To be clear, I have been a full-time <i>Angular Tech Lead</i> for the past five
        years (mostly within a full-stack context). Prior to this I worked with React for a five-month period. Though
        I have worked with React a little-bit since, when I started this exercise I was
        cold on React. If my submission is directly compared with full-time senior React
        developers, I may be at a serious disadvantage. (Other non-React work samples are available at request.)
      </p>

      <p>
        As I completed this exercise some common practices came to mind, such as moving
        pure functions outside a functional component, but <i>please do <b>not</b> review
        this work as if this is my concrete React approach</i>, because my approach would certainly evolve quickly.
      </p>

      <p>Items I may have done differently or worked on further include:</p>

      <ul>
        <li>
          Imply a specific state management approach (I have used Redux
          extensively in Angular, but might not chosen that for React here)
        </li>
        <li>
          Implement a service worker and request library (such as Axios) to
          better simulate an external endpoint. (Not really sure if I hit the "create an endpoint requirement)
        </li>
        <li>
          Separate the TrackingRecordService from the KitManagement component
        </li>
        <li>Add and use a less-standard font.</li>
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
