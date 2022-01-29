import React from 'react';
import IllustrationHero from '../assets/images/illustration-hero.svg';
import IconMusic from '../assets/images/icon-music.svg';
import './OrderSummary.css';
export default function OrderSummary() {
	return (
		<main>
			<div className="order-summary-card">
				<div className="card-image">
					<img src={IllustrationHero} alt="" />
				</div>
				<div className="card-details">
					<h1>Order Summary</h1>
					<p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
				</div>
				<div className="order-info">
					<div className="order-info-left">
						<img src={IconMusic} alt="" />
						<div>
							<h4>Annual Plan</h4>
							<p>$59.99/year</p>
						</div>
					</div>
					<div>
						<a href="#" aria-label="change your order">
							change
						</a>
					</div>
				</div>
				<div className="btn-area">
					<button type="submit" className="payment-btn">
						Proceed to Payment
					</button>
					<button type="submit" className="cancel-btn">
						Cancel Order
					</button>
				</div>
			</div>
			<div class="attribution">
				Challenge by{' '}
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					Frontend Mentor
				</a>
				. Coded by <a href="https://github.com/abishekbardewa/order-summary-card">Abishek Bardewa</a>.
			</div>
		</main>
	);
}
