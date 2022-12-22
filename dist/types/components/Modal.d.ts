import type { SafeEventEmitter } from "@toruslabs/openlogin-jrpc";
import { FC } from "react";
import { ExternalWalletEventType, SocialLoginEventType } from "../interfaces";
interface ModalProps {
    stateListener: SafeEventEmitter;
    appLogo?: string;
    version: string;
    handleSocialLoginClick: (params: SocialLoginEventType) => void;
    handleExternalWalletClick: (params: ExternalWalletEventType) => void;
    handleShowExternalWallets: (externalWalletsInitialized: boolean) => void;
    closeModal: () => void;
    MetamaskLogin: FC;
}
export default function Modal(props: ModalProps): JSX.Element;
export {};
