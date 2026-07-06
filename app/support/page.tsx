'use client';

import React, { useState } from 'react';
import WalletModal from '@/components/wallet/WalletModal';

export default function SupportPage() {
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketDesc, setTicketDesc] = useState('');
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject || !ticketDesc) return;
    setTicketSubmitted(true);
    setTimeout(() => {
      setTicketSubmitted(false);
      setTicketSubject('');
      setTicketDesc('');
    }, 3000);
  };

  return (
    <main className="w-full min-h-screen bg-white text-black pt-24">
      {/* Wallet connection modal */}
      <WalletModal />

      <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-8">
        <div>
          <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest">Customer Support Desk</span>
          <h1 className="text-3xl font-extrabold tracking-tight text-black mt-2">
            Help & Support
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* FAQ Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-black">Frequently Asked Questions</h3>
            <div className="flex flex-col gap-4 text-xs sm:text-sm text-neutral-500">
              <div>
                <h4 className="font-semibold text-black">How are dynamic curves executed?</h4>
                <p className="mt-1 text-xs leading-relaxed text-neutral-400">
                  Orders specify starting prices and linear slopes. Buyers decrease bids; sellers increase asks, driving convergence.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-black">Is there a transaction fee?</h4>
                <p className="mt-1 text-xs leading-relaxed text-neutral-400">
                  Yes. A flat 0.1% keeper fee is deducted on settlement and rewarded to the solver node to cover gas.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-black">Are contracts audited?</h4>
                <p className="mt-1 text-xs leading-relaxed text-neutral-400">
                  The protocol architecture has been mathematically verified, and code review is active within Stability Nexus.
                </p>
              </div>
            </div>
          </div>

          {/* Support Ticket Column */}
          <div className="border border-neutral-200 bg-neutral-50/50 rounded-3xl p-6">
            <h3 className="text-lg font-bold mb-4 text-black">Open Support Ticket</h3>
            {ticketSubmitted ? (
              <div className="text-center py-10">
                <span className="text-3xl">✉️</span>
                <h4 className="text-sm font-semibold text-black mt-4">Ticket Submitted!</h4>
                <p className="text-xs text-neutral-500 mt-2">We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSupportSubmit} className="flex flex-col gap-4 text-[10px] font-semibold uppercase tracking-wider text-neutral-600">
                <div className="flex flex-col gap-1.5">
                  <label className="text-neutral-400">Subject</label>
                  <input
                    type="text"
                    required
                    value={ticketSubject}
                    onChange={(e) => setTicketSubject(e.target.value)}
                    className="rounded-xl border border-neutral-200 bg-white p-3 text-black normal-case font-normal focus:outline-none focus:border-neutral-400"
                    placeholder="Curve query, matching issues..."
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-neutral-400">Details</label>
                  <textarea
                    rows={4}
                    required
                    value={ticketDesc}
                    onChange={(e) => setTicketDesc(e.target.value)}
                    className="rounded-xl border border-neutral-200 bg-white p-3 text-black normal-case font-normal focus:outline-none focus:border-neutral-400 resize-none"
                    placeholder="Provide details..."
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-black py-3 text-center text-xs font-bold text-white uppercase hover:bg-neutral-800 transition-colors"
                >
                  Submit Ticket
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
