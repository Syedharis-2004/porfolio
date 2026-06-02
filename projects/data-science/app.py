import streamlit as st
import pandas as pd
import numpy as np

st.set_page_config(
    page_title="Data Science Dashboard",
    page_icon="📊",
    layout="wide",
    initial_sidebar_state="expanded"
)

# ── Premium CSS ───────────────────────────────────────────────────────────────
st.markdown("""
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

    html, body, [class*="css"] { font-family: 'Inter', sans-serif; }

    /* ── App background ── */
    .stApp { background: #0b1120; color: #e2e8f0; }
    .main .block-container { padding-top: 1.5rem; padding-bottom: 2rem; max-width: 1400px; }

    /* ── Sidebar ── */
    section[data-testid="stSidebar"] {
        background: #0f172a;
        border-right: 1px solid #1e293b;
    }
    section[data-testid="stSidebar"] * { color: #cbd5e1 !important; }
    section[data-testid="stSidebar"] h1,
    section[data-testid="stSidebar"] h2,
    section[data-testid="stSidebar"] h3 { color: #38bdf8 !important; }

    /* ── Metric cards ── */
    div[data-testid="metric-container"] {
        background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
        border: 1px solid #334155;
        border-radius: 20px;
        padding: 1.25rem 1.5rem;
        box-shadow: 0 4px 24px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }
    div[data-testid="metric-container"]::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 2px;
        background: linear-gradient(90deg, #38bdf8, #818cf8);
    }
    div[data-testid="metric-container"]:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 32px rgba(56, 189, 248, 0.2);
        border-color: #38bdf8;
    }
    div[data-testid="metric-container"] label { color: #94a3b8 !important; font-size: 0.8rem !important; font-weight: 600 !important; letter-spacing: 0.08em !important; text-transform: uppercase; }
    div[data-testid="metric-container"] [data-testid="stMetricValue"] { color: #f1f5f9 !important; font-size: 2rem !important; font-weight: 800 !important; }
    div[data-testid="metric-container"] [data-testid="stMetricDelta"] { font-size: 0.8rem !important; font-weight: 600 !important; }

    /* ── Chart cards ── */
    div[data-testid="stVegaLiteChart"],
    div[data-testid="stArrowVegaLiteChart"] {
        background: #1e293b;
        border-radius: 16px;
        border: 1px solid #334155;
        padding: 1rem;
    }

    /* ── DataFrames ── */
    div[data-testid="stDataFrame"] {
        border-radius: 16px;
        border: 1px solid #334155;
        overflow: hidden;
    }

    /* ── Divider ── */
    hr { border-color: #1e293b !important; margin: 1.5rem 0 !important; }

    /* ── Selectbox / date_input ── */
    div[data-testid="stSelectbox"] > div,
    div[data-testid="stDateInput"] > div {
        background: #1e293b !important;
        border-color: #334155 !important;
        border-radius: 10px !important;
        color: #e2e8f0 !important;
    }

    /* ── Buttons ── */
    div[data-testid="stButton"] > button {
        background: linear-gradient(135deg, #38bdf8, #818cf8) !important;
        color: white !important;
        border: none !important;
        border-radius: 10px !important;
        font-weight: 700 !important;
        transition: all 0.2s ease;
    }
    div[data-testid="stButton"] > button:hover {
        opacity: 0.9;
        transform: translateY(-1px);
    }

    /* ── Section headers ── */
    h1 { color: #f1f5f9 !important; font-weight: 800 !important; letter-spacing: -0.5px; }
    h2 { color: #38bdf8 !important; font-weight: 700 !important; }
    h3 { color: #cbd5e1 !important; font-weight: 600 !important; }

    /* ── Custom badge ── */
    .status-badge {
        display: inline-flex; align-items: center; gap: 6px;
        background: rgba(56,189,248,0.1); border: 1px solid rgba(56,189,248,0.3);
        color: #38bdf8; border-radius: 999px; padding: 4px 14px;
        font-size: 0.78rem; font-weight: 600; letter-spacing: 0.05em;
    }
    .status-dot { width:8px; height:8px; border-radius:50%; background:#38bdf8;
        box-shadow: 0 0 6px #38bdf8; animation: pulse 2s infinite; }
    @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }

    /* ── Insight card ── */
    .insight-card {
        background: linear-gradient(135deg, #1e293b, #0f172a);
        border: 1px solid #334155; border-radius: 16px; padding: 1.2rem 1.5rem;
        margin-bottom: 0.75rem; display: flex; align-items: flex-start; gap: 14px;
    }
    .insight-icon { font-size: 1.5rem; margin-top: 2px; }
    .insight-title { color: #f1f5f9; font-weight: 700; font-size: 0.9rem; margin-bottom: 2px; }
    .insight-text  { color: #94a3b8; font-size: 0.82rem; line-height: 1.5; }
</style>
""", unsafe_allow_html=True)

# ── Data ──────────────────────────────────────────────────────────────────────
@st.cache_data
def load_data():
    np.random.seed(42)
    dates = pd.date_range(start="2023-01-01", periods=120, freq="D")
    df = pd.DataFrame({
        'Date': dates,
        'Revenue': np.random.normal(5000, 900, 120).cumsum().clip(min=0),
        'Users': np.random.randint(100, 600, 120),
        'Sessions': np.random.randint(300, 1500, 120),
        'Category': np.random.choice(['Tech', 'Clothing', 'Food', 'Books'], 120),
        'Region': np.random.choice(['North', 'South', 'East', 'West'], 120),
    })
    return df

df = load_data()

# ── SIDEBAR ───────────────────────────────────────────────────────────────────
with st.sidebar:
    st.markdown("## ⚡ Admin Panel")
    st.markdown('<div class="status-badge"><div class="status-dot"></div> ETL Live</div>', unsafe_allow_html=True)
    st.markdown("---")
    st.markdown("### 🔍 Filters")
    region = st.selectbox("🌍 Region", ["All Regions", "North", "South", "East", "West"])
    category = st.selectbox("🏷️ Category", ["All Categories", "Tech", "Clothing", "Food", "Books"])
    st.markdown("### 📅 Date Range")
    date_from = st.date_input("From", value=df['Date'].min())
    date_to   = st.date_input("To",   value=df['Date'].max())
    st.markdown("---")
    apply = st.button("▶  Apply Filters", use_container_width=True)

# Apply filters
filtered = df.copy()
filtered = filtered[(filtered['Date'] >= pd.Timestamp(date_from)) & (filtered['Date'] <= pd.Timestamp(date_to))]
if region != "All Regions":
    filtered = filtered[filtered['Region'] == region]
if category != "All Categories":
    filtered = filtered[filtered['Category'] == category]

# ── HEADER ────────────────────────────────────────────────────────────────────
st.markdown("# 📊 Data Science Analytics")
st.markdown("<p style='color:#64748b; font-size:1.05rem; margin-top:-0.5rem; margin-bottom:1.5rem;'>Real-time business intelligence • Exploratory Data Analysis</p>", unsafe_allow_html=True)

# ── KPI METRICS ───────────────────────────────────────────────────────────────
k1, k2, k3, k4 = st.columns(4)
total_rev    = filtered['Revenue'].iloc[-1] if len(filtered) else 0
total_users  = int(filtered['Users'].sum())
total_sess   = int(filtered['Sessions'].sum())
top_cat      = filtered['Category'].mode()[0] if len(filtered) else "—"

k1.metric("💰 Total Revenue",  f"${total_rev:,.0f}",    "+5.2% vs LM")
k2.metric("👥 Active Users",   f"{total_users:,}",      "-1.5% vs LM")
k3.metric("🖥️ Sessions",       f"{total_sess:,}",       "+12.4% vs LM")
k4.metric("🏆 Top Category",   top_cat,                 "Stable")

st.markdown("---")

# ── CHARTS ROW 1 ─────────────────────────────────────────────────────────────
c1, c2 = st.columns([3, 2])

with c1:
    st.markdown("### 📈 Revenue Trend")
    rev_chart = filtered.set_index('Date')['Revenue']
    st.line_chart(rev_chart, use_container_width=True, color="#38bdf8", height=260)

with c2:
    st.markdown("### 🍕 Category Split")
    cat_data = filtered.groupby('Category')['Users'].sum().reset_index()
    cat_data.columns = ['Category', 'Users']
    st.bar_chart(cat_data.set_index('Category'), use_container_width=True, color="#818cf8", height=260)

st.markdown("---")

# ── CHARTS ROW 2 ─────────────────────────────────────────────────────────────
c3, c4 = st.columns(2)

with c3:
    st.markdown("### 👤 Daily Active Users")
    st.area_chart(filtered.set_index('Date')['Users'], use_container_width=True, color="#34d399", height=220)

with c4:
    st.markdown("### 🌍 Revenue by Region")
    reg_data = filtered.groupby('Region')['Revenue'].sum()
    st.bar_chart(reg_data, use_container_width=True, color="#f472b6", height=220)

st.markdown("---")

# ── AI INSIGHTS ───────────────────────────────────────────────────────────────
st.markdown("### 🤖 AI-Generated Insights")
i1, i2 = st.columns(2)
with i1:
    st.markdown(f"""
    <div class="insight-card">
        <div class="insight-icon">📈</div>
        <div>
            <div class="insight-title">Revenue Momentum</div>
            <div class="insight-text">Revenue has grown <strong style="color:#38bdf8">{((filtered['Revenue'].iloc[-1]/filtered['Revenue'].iloc[0]-1)*100):.1f}%</strong> over the selected period. Consider scaling ad spend for the top-performing category.</div>
        </div>
    </div>
    <div class="insight-card">
        <div class="insight-icon">🏆</div>
        <div>
            <div class="insight-title">Category Leader</div>
            <div class="insight-text"><strong style="color:#818cf8">{top_cat}</strong> is the top-performing category by user engagement. Focus marketing budget here for maximum ROI.</div>
        </div>
    </div>
    """, unsafe_allow_html=True)
with i2:
    st.markdown(f"""
    <div class="insight-card">
        <div class="insight-icon">👥</div>
        <div>
            <div class="insight-title">User Growth Signal</div>
            <div class="insight-text">Average daily users: <strong style="color:#34d399">{filtered['Users'].mean():.0f}</strong>. Peak day hit <strong style="color:#34d399">{filtered['Users'].max()}</strong> users — replicate those conditions.</div>
        </div>
    </div>
    <div class="insight-card">
        <div class="insight-icon">⚠️</div>
        <div>
            <div class="insight-title">Anomaly Detected</div>
            <div class="insight-text">Session-to-user ratio shows variance. Check for bot traffic or caching issues on high-session days above <strong style="color:#fbbf24">{int(filtered['Sessions'].quantile(0.9))}</strong> sessions.</div>
        </div>
    </div>
    """, unsafe_allow_html=True)

st.markdown("---")

# ── RAW DATA ─────────────────────────────────────────────────────────────────
with st.expander("📋 Raw Data Preview (last 15 rows)", expanded=False):
    st.dataframe(
        filtered.tail(15).style.background_gradient(subset=['Revenue'], cmap='Blues'),
        use_container_width=True
    )
