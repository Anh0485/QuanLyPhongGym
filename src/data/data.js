import { AiFillDashboard, AiFillHome } from 'react-icons/ai'
import { MdOutlineAppRegistration, MdOutlinePayment, MdInventory, MdPeople } from 'react-icons/md'
import { RiTodoFill } from 'react-icons/ri';
import { CgGym } from 'react-icons/cg';
import { HiBookOpen } from 'react-icons/hi'
export const links = [
    {
        title: 'Dash Board',
        name: 'dashboard',
        icon: <AiFillDashboard />
    },
    {
        title: 'Admin Profile',
        name: 'adminProfile',
        icon: <AiFillHome />
    },
    {
        title: 'Registration',
        name: 'registration',
        icon: <MdOutlineAppRegistration />
    },
    {
        title: 'Plan',
        name: 'plan',
        icon: <RiTodoFill />
    },
    {
        title: 'Payment',
        name: 'payment',
        icon: <MdOutlinePayment />
    },
    {
        title: 'Inventory',
        name: 'inventory',
        icon: <MdInventory />
    },
    {
        title: 'View Member',
        name: 'viewmember',
        icon: <MdPeople />
    },
    {
        title: 'Coaches',
        name: 'coaches',
        icon: <CgGym />
    },
    {
        title: 'Report',
        name: 'report',
        icon: <HiBookOpen />
    },
    // {
    //     title: 'Pages',
    //     links: [
    //         {
    //             name: 'orders',
    //             icon: <AiOutlineShoppingCart />,
    //         },
    //         {
    //             name: 'employees',
    //             icon: <IoMdContacts />,
    //         },
    //         {
    //             name: 'customers',
    //             icon: <RiContactsLine />,
    //         },
    //     ],
    // },
    // {
    //     title: 'Apps',
    //     links: [
    //         {
    //             name: 'calendar',
    //             icon: <AiOutlineCalendar />,
    //         },
    //         {
    //             name: 'kanban',
    //             icon: <BsKanban />,
    //         },
    //         {
    //             name: 'editor',
    //             icon: <FiEdit />,
    //         },
    //         {
    //             name: 'color-picker',
    //             icon: <BiColorFill />,
    //         },
    //     ],
    // },
]