import streamlit as st
import pandas as pd
import numpy as np

st.set_page_config(page_title="Data Science Dashboard", layout="wide")

st.title("📊 Data Science Analytics Dashboard")
st.markdown("A professional Streamlit dashboard for Exploratory Data Analysis (EDA) and business insights.")

# Generate Mock Data (Backend equivalent logic)
@st.cache_data
def load_data():
    dates = pd.date_range(start="2023-01-01", periods=100)
    data = pd.DataFrame({
        'Date': dates,
        'Revenue': np.random.normal(5000, 1000, 100).cumsum(),
        'Users': np.random.randint(100, 500, 100),
        'Category': np.random.choice(['Tech', 'Clothing', 'Food', 'Books'], 100)
    })
    return data

df = load_data()

# Frontend Metrics
col1, col2, col3 = st.columns(3)
col1.metric("Total Revenue", f"${df['Revenue'].iloc[-1]:,.2f}", "+5.2%")
col2.metric("Active Users", f"{df['Users'].sum():,}", "-1.5%")
col3.metric("Top Category", df['Category'].mode()[0])

st.divider()

# Visualizations
st.subheader("📈 Revenue Over Time")
st.line_chart(df.set_index('Date')['Revenue'])

st.subheader("👥 User Distribution by Category")
category_data = df.groupby('Category')['Users'].sum()
st.bar_chart(category_data)

st.subheader("Raw Data Preview")
st.dataframe(df.tail(10))
