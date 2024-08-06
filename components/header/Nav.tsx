import Link from "next/link";
import { buttonVariants } from "../ui/button";

interface INav {
  className: string;
}

const Nav: React.FC<INav> = ({ className }) => {
  return (
    <nav aria-label='Global'>
      <ul className={className}>
        <li className="border-b md:border-0 md:w-fit">
          <Link href='/' className={`${buttonVariants({ variant: 'link' })}`}>
            Car Parking
          </Link>
        </li>

        <li className="border-b md:border-0 md:w-fit">
          <Link href='/' className={`${buttonVariants({ variant: 'link' })}`}>
            Events
          </Link>
        </li>

        <li className="border-b md:border-0 md:w-fit">
          <Link href='/' className={`${buttonVariants({ variant: 'link' })}`}>
            Workshops
          </Link>
        </li>

        <li className="border-b md:border-0 md:w-fit">
          <Link href='/' className={`${buttonVariants({ variant: 'link' })}`}>
            Photos
          </Link>
        </li>

        <li className="md:w-fit">
          <Link href='/' className={`${buttonVariants({ variant: 'link' })}`}>
            Calendar
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
