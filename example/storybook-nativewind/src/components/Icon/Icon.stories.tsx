import type { ComponentMeta } from '@storybook/react-native';
import Icon from './Icon';
import IconPropTesting from './IconPropTesting';

// BellIcon, // AtSignIcon, // ArrowLeftIcon, // ArrowRightIcon, // ArrowDownIcon, // ArrowUpIcon, // AlertCircleIcon, // AddIcon, // Icon,
// CalendarDaysIcon,
// CheckIcon,
// CheckCircleIcon,
// ChevronUpIcon,
// ChevronDownIcon,
// ChevronLeftIcon,
// ChevronRightIcon,
// ChevronsLeftIcon,
// ChevronsRightIcon,
// ChevronsUpDownIcon,
// CircleIcon,
// ClockIcon,
// CloseIcon,
// CloseCircleIcon,
// CopyIcon,
// DownloadIcon,
// EditIcon,
// EyeIcon,
// EyeOffIcon,
// FavouriteIcon,
// GlobeIcon,
// GripVerticalIcon,
// HelpCircleIcon,
// InfoIcon,
// LinkIcon,
// ExternalLinkIcon,
// LoaderIcon,
// LockIcon,
// MailIcon,
// MenuIcon,
// MessageCircleIcon,
// MoonIcon,
// PaperclipIcon,
// PhoneIcon,
// PlayIcon,
// RemoveIcon,
// RepeatIcon,
// Repeat1Icon,
// SearchIcon,
// SettingsIcon,
// ShareIcon,
// SlashIcon,
// StarIcon,
// SunIcon,
// ThreeDotsIcon,
// TrashIcon,
// UnlockIcon,
// './Icon';

const IconMeta: ComponentMeta<typeof Icon> = {
  title: 'stories/Icon',
  component: Icon,
  metaInfo: {
    clusteringOrder: [['as', 'displayName'], 'size'],
    componentDescription:
      'Icons are often used to enhance the usability and accessibility of digital products by providing users with clear and intuitive visual cues. It serves as an intuitive and easily recognizable way to communicate with users.',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xl', 'lg', 'md', 'sm', 'xs', '2xs'],
    },
  },
  args: {
    size: 'md',
    // as: 'AddIcon',
    // as: {
    //   control: 'select',
    //   options: [
    //     // AddIcon,
    //     // AlertCircleIcon,
    //     // ArrowUpIcon,
    //     // ArrowDownIcon,
    //     // ArrowRightIcon,
    //     // ArrowLeftIcon,
    //     // AtSignIcon,
    //     // BellIcon,
    //     // CalendarDaysIcon,
    //     // CheckIcon,
    //     // CheckCircleIcon,
    //     // ChevronUpIcon,
    //     // ChevronDownIcon,
    //     // ChevronLeftIcon,
    //     // ChevronRightIcon,
    //     // ChevronsLeftIcon,
    //     // ChevronsRightIcon,
    //     // ChevronsUpDownIcon,
    //     // CircleIcon,
    //     // ClockIcon,
    //     // CloseIcon,
    //     // CloseCircleIcon,
    //     // CopyIcon,
    //     // DownloadIcon,
    //     // EditIcon,
    //     // EyeIcon,
    //     // EyeOffIcon,
    //     // FavouriteIcon,
    //     // GlobeIcon,
    //     // GripVerticalIcon,
    //     // HelpCircleIcon,
    //     // InfoIcon,
    //     // LinkIcon,
    //     // ExternalLinkIcon,
    //     // LoaderIcon,
    //     // LockIcon,
    //     // MailIcon,
    //     // MenuIcon,
    //     // MessageCircleIcon,
    //     // MoonIcon,
    //     // PaperclipIcon,
    //     // PhoneIcon,
    //     // PlayIcon,
    //     // RemoveIcon,
    //     // RepeatIcon,
    //     // Repeat1Icon,
    //     // SearchIcon,
    //     // SettingsIcon,
    //     // ShareIcon,
    //     // SlashIcon,
    //     // StarIcon,
    //     // SunIcon,
    //     // ThreeDotsIcon,
    //     // TrashIcon,
    //     // UnlockIcon,
    //   ],
    // },
  },
};

export default IconMeta;

export { Icon, IconPropTesting };
