"use client";

// * install libraries
import Combobox from "@/components/ui/combobox";
import {
    CalendarIcon,
    EnvelopeClosedIcon,
    FaceIcon,
    GearIcon,
    PersonIcon,
    RocketIcon,
} from "@radix-ui/react-icons";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command";

const Left = () => {
    return (
        <div className=' h-full truncate'>
            <div className='p-2 flex justify-center border-b-[1px]'>
                <Combobox />
            </div>

            <div className='truncate'>
                {/* 카테고리 리스트 */}
                <Command className=''>
                    <CommandInput placeholder='Type a command or search...' />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading='Suggestions'>
                            <CommandItem>
                                <CalendarIcon className='mr-2 h-4 w-4' />
                                <span>Calendar</span>
                            </CommandItem>
                            <CommandItem>
                                <FaceIcon className='mr-2 h-4 w-4' />
                                <span>Search Emoji</span>
                            </CommandItem>
                            <CommandItem>
                                <RocketIcon className='mr-2 h-4 w-4' />
                                <span>Launch</span>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading='Settings'>
                            <CommandItem>
                                <PersonIcon className='mr-2 h-4 w-4' />
                                <span>Profile</span>
                                <CommandShortcut>⌘P</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <EnvelopeClosedIcon className='mr-2 h-4 w-4' />
                                <span>Mail</span>
                                <CommandShortcut>⌘B</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <GearIcon className='mr-2 h-4 w-4' />
                                <span>Settings</span>
                                <CommandShortcut>⌘S</CommandShortcut>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </div>
        </div>
    );
};

export default Left;
