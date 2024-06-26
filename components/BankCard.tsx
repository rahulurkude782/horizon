import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <Link href={"/my-banks"}>
      <div className="flex flex-col">
        <div className="bank-card">
          <div className="bank-card_content">
            <div>
              <h1 className="text-16 font-semibold text-white">{userName}</h1>
              <p className="font-ibm-plex-serif font-semibold font-16 text-white">
                {formatAmount(account.currentBalance)}
              </p>
            </div>
            <article className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h1 className="text-12 font-semibold text-white">{userName}</h1>
                <h1 className="text-12 font-semibold text-white">●● / ●●</h1>
              </div>
              <p className="text-12 font-semibold tracking-[1.1px] text-white">
                ●●●● ●●●● ●●●● <span className="text-14">1234</span>
              </p>
            </article>
          </div>
          <div className="bank-card_icon">
            <Image
              src={"/icons/Paypass.svg"}
              width={20}
              height={24}
              alt="paypass"
            />
            <Image
              src={"/icons/mastercard.svg"}
              width={45}
              height={32}
              alt="msaatercard"
              className="ml-5"
            />
          </div>
          <Image
            src={"/icons/lines.png"}
            width={316}
            height={190}
            alt="lines"
            className="absolute top-0 left-0"
          />
        </div>
      </div>
    </Link>
  );
};

export default BankCard;
