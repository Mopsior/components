'use client'
import { Tabs, TabsButton } from "@/components/custom/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export const Ex1 = () => {
    const [selected, setSelected] = useState(0)

    return (
        <Tabs>
            <TabsButton layoutId="ex1" selected={selected === 0} onClick={() => setSelected(0)}>Home</TabsButton>
            <TabsButton layoutId="ex1" selected={selected === 1} onClick={() => setSelected(1)}>Shop</TabsButton>
            <TabsButton layoutId="ex1" selected={selected === 2} onClick={() => setSelected(2)}>Contact</TabsButton>
        </Tabs>
    )
}

export const Ex2 = () => {
    const [selected, setSelected] = useState<'login' | 'signup'>('login')

    return (
        <div className="relative">
            <Tabs className="mx-auto" disableOverflow>
                <TabsButton layoutId="ex2" selected={selected === 'login'} onClick={() => setSelected('login')}>Login</TabsButton>
                <TabsButton layoutId="ex2" selected={selected === 'signup'} onClick={() => setSelected('signup')}>Signup</TabsButton>
            </Tabs>
            { selected === 'login' && (
                <div className="border p-4 rounded-lg bg-background mt-4">
                    <h2 className="text-2xl font-semibold tracking-tight">Log in</h2>
                    <p className="text-sm text-muted-foreground">Log in to enter Acme</p>
                    <div className="mt-4">
                        <Label htmlFor="login">Login</Label>
                        <Input name="login" id="login" type="email" className="mb-4" />
                        <Label htmlFor="password">Password</Label>
                        <Input name="password" id="password" type="password"/>
                        <Button variant={'outline'} className="mt-4">Log in</Button>
                    </div>
                </div>
            )}
            { selected === 'signup' && (
                <div className="border p-4 rounded-lg bg-background mt-4">
                    <h2 className="text-2xl font-semibold tracking-tight">Create account</h2>
                    <p className="text-sm text-muted-foreground">Create account and then log in to Acme</p>
                    <div className="mt-4">
                        <Label htmlFor="register">Register</Label>
                        <Input name="register" id="register" type="email" className="mb-4" />
                        <Label htmlFor="password">Password</Label>
                        <Input name="password" id="password" type="password"/>
                        <div className="mt-4 flex gap-x-2">
                            <Button>Register</Button>
                            <Button variant={'outline'}>Forgot password?</Button>
                        </div>
                    </div>
                </div>
            ) }
        </div>
    )
}