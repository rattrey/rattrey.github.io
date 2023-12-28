import plotly.graph_objects as go
import numpy as np

# Constants for the multimodal 3D function
a, d, f = 0.05, 0.03, 0.04
b, e = 50, 20  # Optimal price point and seasonal/store factor
c = 1500  # Max sales/margin
g, h, i = 10, 15, 5  # Additional factors for complexity

# Generating Price and Seasonal/Store Size Factor Data
price = np.linspace(0, 100, 100)
seasonal_factor = np.linspace(0, 40, 100)
price_grid, seasonal_factor_grid = np.meshgrid(price, seasonal_factor)

# Multimodal and complex calculations for sales/margin
sales = (-a * np.cos(price_grid / g) * np.cos(seasonal_factor_grid / h)
         - d * (price_grid - b)**2 
         - f * (seasonal_factor_grid - e)**2 
         + c
         + 300 * np.exp(-((price_grid - 30)**2 + (seasonal_factor_grid - 10)**2) / i**2)
         + 200 * np.exp(-((price_grid - 70)**2 + (seasonal_factor_grid - 30)**2) / i**2))

# Creating the 3D plot with enhanced grid lines
fig = go.Figure(data=[go.Surface(z=sales, x=price_grid, y=seasonal_factor_grid, colorscale='Cividis')])

# Customize grid lines
fig.update_layout(
    scene=dict(
        xaxis=dict(showticklabels=False, title='', gridcolor='lightgrey', zerolinecolor='grey'),
        yaxis=dict(showticklabels=False, title='', gridcolor='lightgrey', zerolinecolor='grey'),
        zaxis=dict(showticklabels=False, title='', gridcolor='lightgrey', zerolinecolor='grey')),
    autosize=False,
    width=800, height=800,
    margin=dict(l=65, r=50, b=65, t=90))

#Causal impact
import plotly.graph_objects as go
from plotly.subplots import make_subplots
import numpy as np
import pandas as pd

# Generate synthetic data for illustration
np.random.seed(42)
pre_period_data = np.random.normal(100, 10, 120)
post_period_data = np.random.normal(120, 10, 60)
data = np.concatenate((pre_period_data, post_period_data))
dates = pd.date_range(start='2020-01-01', periods=180, freq='D')

# Intervention index for when the change occurred
intervention_index = 120

# Create subplots
fig = make_subplots(rows=3, cols=1, shared_xaxes=True, vertical_spacing=0.02)

# Panel 1: Actual vs Predicted
fig.add_trace(go.Scatter(x=dates, y=data, mode='lines', name='Observed'), row=1, col=1)
fig.add_trace(go.Scatter(x=dates[intervention_index:], y=data[intervention_index:], mode='lines', name='Predicted'), row=1, col=1)

# Panel 2: Pointwise effects (difference between actual and predicted)
point_effects = data[intervention_index:] - data[intervention_index]
fig.add_trace(go.Scatter(x=dates[intervention_index:], y=point_effects, fill='tozeroy', name='Point Effects'), row=2, col=1)

# Panel 3: Cumulative effect
cumulative_effect = np.cumsum(point_effects)
fig.add_trace(go.Scatter(x=dates[intervention_index:], y=cumulative_effect, fill='tozeroy', name='Cumulative Effect'), row=3, col=1)

# Update layout
fig.update_layout(height=600, width=800, title_text="Causal Impact Analysis Visualization")
fig.show()
