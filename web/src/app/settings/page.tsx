'use client';

import { Suspense } from 'react';

function SettingsHomepageContent() {
   return (
      <div className="container">
         <div className="content">
            <h1>Settings</h1>
            <p>
               This is where you can configure the system to your liking. You
               can enable or disable modules, set up user permissions, and more.
            </p>

            <h2>Enabled Modules</h2>
            <p>
               Below, you can control how much of the system is available to use
               balancing robustness with desired simplicity.
            </p>
            <form>
               <div className="form-row">
                  <label htmlFor="enable_inventory">
                     <input type="checkbox" id="enable_inventory" /> Enable
                     Inventory
                  </label>
               </div>

               <div className="form-row">
                  <label htmlFor="enable_asset_financials">
                     <input type="checkbox" id="enable_asset_financials" />{' '}
                     Enable Asset Financials
                  </label>
               </div>

               <div className="form-row">
                  <label htmlFor="enable_work_orders">
                     <input type="checkbox" id="enable_work_orders" /> Enable
                     Work Orders
                  </label>
               </div>

               <div className="form-row">
                  <label htmlFor="enable_purchase_orders">
                     <input type="checkbox" id="enable_purchase_orders" />{' '}
                     Enable Purchase Orders
                  </label>
               </div>

               <div className="form-row">
                  <label htmlFor="enable_sales_orders">
                     <input type="checkbox" id="enable_sales_orders" /> Enable
                     Sales Orders
                  </label>
               </div>

               <div className="form-row">
                  <label htmlFor="enable_marketplace">
                     <input type="checkbox" id="enable_marketplace" /> Enable
                     Marketplace
                  </label>
               </div>
            </form>
         </div>
      </div>
   );
}

export default function SettingsHomepage() {
   return (
      <Suspense fallback={<div>Loading...</div>}>
         <SettingsHomepageContent />
      </Suspense>
   );
}
