import { FC } from "react";
interface SocialLoginEmailProps {
    adapter: string;
    handleSocialLoginClick: (params: {
        adapter: string;
        loginParams: {
            loginProvider: string;
            login_hint?: string;
        };
    }) => void;
    MetamaskLogin: FC;
}
export default function SocialLoginEmail(props: SocialLoginEmailProps): JSX.Element;
export {};
