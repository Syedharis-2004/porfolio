import streamlit as st
import pandas as pd
import numpy as np

st.set_page_config(page_title="Data Science Dashboard", layout="wide", initial_sidebar_state="expanded")

# Inject Custom CSS for Premium Look
st.markdown("""
<style>
    /* Global Styles */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
    
    html, body, [class*="css"] {
        font-family: 'Inter', sans-serif;
    }
    
    /* Background & Text */
    .stApp {
        background-color: #0f172a;
        color: #f8fafc;
    }
    
    /* Headers */
    h1, h2, h3 {
        color: #38bdf8 !important;
        font-weight: 700 !important;
        letter-spacing: -0.5px;
    }
    
    /* Metric Cards */
    div[data-testid="metric-container"] {
        background-color: #1e293b;
        border: 1px solid #334155;
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        transition: all 0.3s ease;
    }
    
    div[data-testid="metric-container"]:hover {
        transform: translateY(-5px);
        box-shadow: 0 0 15px 0 rgba(56, 189, 248, 0.3);
        border-color: #38bdf8;
    }
    
    div[data-testid="metric-container"] > div {
        color: #94a3b8 !important; /* Label color */
    }
    
    /* Dataframes */
    .stDataFrame {
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid #334155;
    }
    
    /* Dividers */
    hr {
        border-color: #334155 !important;
        margin: 2rem 0 !important;
    }
    
    /* Sidebar */
    .css-1d391kg {
        background-color: #0f172a;
        border-right: 1px solid #1e293b;
    }
</style>
""", unsafe_allow_html=True)

with st.sidebar:
    st.image("https://cdn-icons-png.flaticon.com/512/2103/2103322.png", width=60)
    st.title("Admin Panel")
    st.markdown("Navigate your insights.")
    st.date_input("Filter Date Range")
    st.selectbox("Select Region", ["Global", "North America", "Europe", "Asia"])
    st.button("Apply Filters", use_container_width=True)

st.title("✨ Data Science Analytics Dashboard")
st.markdown("<p style='color: #94a3b8; font-size: 1.1rem; margin-bottom: 2rem;'>A professional Streamlit dashboard for Exploratory Data Analysis (EDA) and business insights.</p>", unsafe_allow_html=True)

# Generate Mock Data
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
col1.metric("Total Revenue", f"${df['Revenue'].iloc[-1]:,.2f}", "+5.2% vs Last Month")
col2.metric("Active Users", f"{df['Users'].sum():,}", "-1.5% vs Last Month")
col3.metric("Top Category", df['Category'].mode()[0], "Stable")

st.divider()

# Visualizations
col_chart1, col_chart2 = st.columns(2)

with col_chart1:
    st.subheader("📈 Revenue Over Time")
    st.line_chart(df.set_index('Date')['Revenue'], use_container_width=True, color="#38bdf8")

with col_chart2:
    st.subheader("👥 User Distribution by Category")
    category_data = df.groupby('Category')['Users'].sum()
    st.bar_chart(category_data, use_container_width=True, color="#818cf8")

st.divider()

st.subheader("📋 Raw Data Preview")
st.dataframe(df.tail(10), use_container_width=True)

