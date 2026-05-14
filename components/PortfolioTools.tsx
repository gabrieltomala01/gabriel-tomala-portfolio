"use client";

import { useState } from "react";

const IFRAME_SRC =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQqRDefE5CHA1NVt2tml7FO5PGRkHg6gEkQIMaBVROtp3ywepuuF7hzgGgte4rs-P5sJ1wSnXWmpn0D/pubhtml?widget=true&headers=false";

function DashboardCard() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-[#1A56DB] hover:shadow-md transition-all duration-200">
      <span className="inline-block text-[12px] font-semibold text-[#1A56DB] bg-[#EFF6FF] px-2.5 py-1 rounded-full mb-4">
        Analytics
      </span>
      <h3 className="text-[20px] font-semibold text-[#111111] mb-3 leading-snug">
        Freight Spend Dashboard
      </h3>
      <p className="text-[15px] text-[#6B7280] leading-[1.7] mb-5">
        Company-wide freight spend reporting suite across 500 Q1 shipments and
        8 carriers. Distance-based rate engine, full AP/AR tracking, weekly and
        monthly views by carrier, mode, and product. Lane analysis, executive
        summary with auto-generating threshold alerts, and a Q2 forecast with
        performance-weighted carrier allocation.
      </p>

      {/* Embedded iframe */}
      <div className="relative h-[500px] rounded-lg overflow-hidden border border-[#E5E7EB] mb-5">
        {!loaded && (
          <div className="absolute inset-0 bg-[#F3F4F6] animate-pulse flex items-center justify-center">
            <span className="text-[13px] text-[#9CA3AF]">Loading dashboard…</span>
          </div>
        )}
        <iframe
          src={IFRAME_SRC}
          className="w-full h-full border-0"
          onLoad={() => setLoaded(true)}
          title="Freight Spend Dashboard"
        />
      </div>

      <a
        href="/downloads/Freight_Spend_Dashboard_GT_v3.xlsx"
        download
        className="inline-flex items-center px-4 py-2 rounded-lg bg-[#1A56DB] text-white text-[13px] font-medium hover:bg-[#1644b8] transition-colors"
      >
        Download Excel
      </a>
    </div>
  );
}

const SCORECARD_SRC =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdwMSFC9qEU3Xbx_Q1PiXz5XDTTslA0lE2CzmD7BipLD1bjQr-qtj4PvlBAlD-N9PWz8OZvdFbe78C/pubhtml?widget=true&headers=false";

function ScorecardCard() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-[#1A56DB] hover:shadow-md transition-all duration-200">
      <span className="inline-block text-[12px] font-semibold text-[#1A56DB] bg-[#EFF6FF] px-2.5 py-1 rounded-full mb-4">
        Operations
      </span>
      <h3 className="text-[20px] font-semibold text-[#111111] mb-3 leading-snug">
        Carrier Performance Scorecard
      </h3>
      <p className="text-[15px] text-[#6B7280] leading-[1.7] mb-5">
        A full carrier evaluation system built on 250+ shipment records across
        Q1. Weighted scoring across cost, on-time performance, and service
        quality. Includes carrier tier rankings, automated exception flagging,
        and a quarterly business review template.
      </p>

      {/* Embedded iframe */}
      <div className="relative h-[420px] md:h-[600px] rounded-lg overflow-hidden border border-[#E5E7EB] mb-5">
        {!loaded && (
          <div className="absolute inset-0 bg-[#F3F4F6] animate-pulse flex items-center justify-center">
            <span className="text-[13px] text-[#9CA3AF]">Loading scorecard…</span>
          </div>
        )}
        <iframe
          src={SCORECARD_SRC}
          className="w-full h-full border-0"
          onLoad={() => setLoaded(true)}
          title="Carrier Performance Scorecard"
        />
      </div>

      <a
        href="/downloads/Carrier_Scorecard_GT_v3.xlsx"
        download
        className="inline-flex items-center px-4 py-2 rounded-lg bg-[#1A56DB] text-white text-[13px] font-medium hover:bg-[#1644b8] transition-colors"
      >
        Download Excel →
      </a>
    </div>
  );
}

const RFP_SRC =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTJWLBbc7DqVf-DTZgFztnEBIBF_4B3hBtLvtanqmBMJjG0WFgXbcf6Hdvqq5jaGqBYBv3cNPw_TpLi/pubhtml?widget=true&headers=false";

function RfpCard() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-[#1A56DB] hover:shadow-md transition-all duration-200">
      <span className="inline-block text-[12px] font-semibold text-[#1A56DB] bg-[#EFF6FF] px-2.5 py-1 rounded-full mb-4">
        Sales Operations
      </span>
      <h3 className="text-[20px] font-semibold text-[#111111] mb-3 leading-snug">
        RFP Bid Analysis Tool
      </h3>
      <p className="text-[15px] text-[#6B7280] leading-[1.7] mb-5">
        Simulates a full freight broker RFP response for a grocery distributor
        network. 500 lanes across 11 distribution centers, strict 80/20 volume
        distribution, real distance-based mileage. A live pricing strategy page
        drives quoted rates across the entire bid sheet — change a markup and
        every lane recalculates instantly.
      </p>

      {/* Embedded iframe */}
      <div className="relative h-[420px] md:h-[600px] rounded-lg overflow-hidden border border-[#E5E7EB] mb-5">
        {!loaded && (
          <div className="absolute inset-0 bg-[#F3F4F6] animate-pulse flex items-center justify-center">
            <span className="text-[13px] text-[#9CA3AF]">Loading RFP tool…</span>
          </div>
        )}
        <iframe
          src={RFP_SRC}
          className="w-full h-full border-0"
          onLoad={() => setLoaded(true)}
          title="RFP Bid Analysis Tool"
        />
      </div>

      <a
        href="/downloads/RFP_Bid_Analysis_GT_v2.xlsx"
        download
        className="inline-flex items-center px-4 py-2 rounded-lg bg-[#1A56DB] text-white text-[13px] font-medium hover:bg-[#1644b8] transition-colors"
      >
        Download Excel →
      </a>
    </div>
  );
}

export default function PortfolioTools() {
  return (
    <div className="grid grid-cols-1 gap-6">
      <ScorecardCard />
      <DashboardCard />
      <RfpCard />
    </div>
  );
}
