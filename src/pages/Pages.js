import { Authorised } from './Authorised';
import { NonAuthorised } from './Nonauthorised';


export const Pages = ({ user }) => {
    return (
      user ?
        <Authorised/> :
        <NonAuthorised/>
    );

}
