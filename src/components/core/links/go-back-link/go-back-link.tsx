import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Link } from "../link/link";
import { LinkProps } from '../link/props';

export const GoBackLink: React.FC<LinkProps> = ({ className, ...rest }) => {
  return (
    <Link
      onPress={() => router.back()}
      className={
        `text-left w-5 items-start` +
        className
      }
      {...rest}
    >
      <Feather name="arrow-left" size={18} color="dark" />
    </Link>
  )
}
