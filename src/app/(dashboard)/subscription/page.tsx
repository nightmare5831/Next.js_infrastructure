'use client'

import { useState } from 'react'
import Request from '@/lib/request'

type PricingPlan = {
  id: string
  name: string
  price: number
  interval: 'month' | 'year'
  features: string[]
  recommended?: boolean
  stripePriceId: string
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 29,
    interval: 'month',
    stripePriceId: 'price_starter_monthly',
    features: [
      'Up to 5 campaigns',
      'Basic analytics',
      'Email support',
      '1,000 ad impressions/month',
      'Standard templates'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 99,
    interval: 'month',
    recommended: true,
    stripePriceId: 'price_professional_monthly',
    features: [
      'Unlimited campaigns',
      'Advanced analytics & reporting',
      'Priority email & chat support',
      '10,000 ad impressions/month',
      'Custom templates',
      'A/B testing',
      'API access'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 299,
    interval: 'month',
    stripePriceId: 'price_enterprise_monthly',
    features: [
      'Everything in Professional',
      'Unlimited ad impressions',
      'Dedicated account manager',
      '24/7 phone support',
      'Custom integrations',
      'SLA guarantee',
      'Advanced security features',
      'Multi-team management'
    ]
  }
]

export default function SubscriptionPage() {
  const [billingInterval, setBillingInterval] = useState<'month' | 'year'>('month')
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async (plan: PricingPlan) => {
    setIsLoading(true)
    setSelectedPlan(plan.id)
    
    try {
      // Create Stripe checkout session
      const response = await Request.Post('/api/stripe/create-checkout-session', {
        priceId: plan.stripePriceId,
        planId: plan.id,
        interval: billingInterval
      })
      
      // Redirect to Stripe checkout
      if (response.sessionUrl) {
        window.location.href = response.sessionUrl
      }
      
    } catch (error) {
      console.error('Subscription error:', error)
      // TODO: Show error toast/notification
    } finally {
      setIsLoading(false)
      setSelectedPlan(null)
    }
  }

  return (
    <div className="p-8">
      {/* Pricing Header */}
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-4xl font-bold tracking-tight">Choose Your Plan</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Start free and scale as you grow. No hidden fees.
        </p>
        
        {/* Billing Toggle */}
        <div className="mt-8 flex items-center justify-center space-x-3">
          <span className={billingInterval === 'month' ? 'font-medium' : 'text-muted-foreground'}>
            Monthly
          </span>
          <button
            onClick={() => setBillingInterval(billingInterval === 'month' ? 'year' : 'month')}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-primary transition-transform ${
                billingInterval === 'year' ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={billingInterval === 'year' ? 'font-medium' : 'text-muted-foreground'}>
            Yearly
            <span className="ml-1 text-sm text-green-600 font-medium">Save 20%</span>
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => {
            const price = billingInterval === 'year' ? Math.floor(plan.price * 0.8) : plan.price
            const isCurrentPlan = selectedPlan === plan.id
            
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl border ${
                  plan.recommended
                    ? 'border-primary shadow-lg scale-105'
                    : 'border-border'
                } bg-card p-8`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                      RECOMMENDED
                    </span>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">${price}</span>
                    <span className="ml-1 text-muted-foreground">/{billingInterval}</span>
                  </div>
                  {billingInterval === 'year' && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      <span className="line-through">${plan.price * 12}</span>
                      <span className="ml-2 text-green-600">${price * 12}/year</span>
                    </p>
                  )}
                </div>
                
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="mr-3 h-5 w-5 flex-shrink-0 text-primary"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => handleSubscribe(plan)}
                  disabled={isLoading}
                  className={`w-full rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    plan.recommended
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-muted hover:bg-muted/80'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isLoading && isCurrentPlan ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Get Started'
                  )}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}