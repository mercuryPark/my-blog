"use client";

// * install libraries
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    userID: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
});

const LoginFormDialog = (props: {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const { visible = false, setVisible = () => {} } = props;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            userID: "",
            password: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        form.reset();
    }

    return (
        <Dialog
            open={visible}
            onOpenChange={(e) => {
                setVisible(e);
            }}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>사용자 인증</DialogTitle>
                    <DialogDescription>
                        <div className='py-6'>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className='space-y-4'
                                >
                                    <FormField
                                        control={form.control}
                                        name='userID'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>아이디</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder='ID를 입력해주세요.'
                                                        {...field}
                                                    />
                                                </FormControl>
                                                {/* <FormDescription>
                                                아이디를 입력해주세요.
                                            </FormDescription> */}
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name='password'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>비밀번호</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder='Password를 입력해주세요.'
                                                        {...field}
                                                    />
                                                </FormControl>
                                                {/* <FormDescription>
                                                아이디를 입력해주세요.
                                            </FormDescription> */}
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button
                                        type='submit'
                                        className='float-right'
                                    >
                                        로그인
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default LoginFormDialog;
