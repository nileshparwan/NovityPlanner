import { SignedIn, UserButton } from '@clerk/nextjs';

const UserButtonComponent:React.FC = () => {
  return (
    <SignedIn>
      <UserButton />
    </SignedIn>
  );
};

export default UserButtonComponent;
