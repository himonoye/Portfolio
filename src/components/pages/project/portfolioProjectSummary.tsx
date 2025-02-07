import React from 'react';
import BulletPoints from '../../style_guide/bulletPoints';

type projectSummaryProps = {
	projectImpact: string[];
}

export default function PortfolioProjectSummary ({projectImpact}:projectSummaryProps) {
	return (
		<div className="project-section-container">
			<div className="project-info-block-list-container">
				<div className="project-info-block">
					<div className="project-info-block-text">
						<div className="heading-sub">The Impact</div>
						<BulletPoints bulletPoints={projectImpact}/>
					</div>
				</div>
			</div>
		</div>
	)
}