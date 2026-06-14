FROM python:3.10-slim

WORKDIR /code

# Install system dependencies needed for compiling math libraries
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

COPY ./requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# Copy your app directory into the container
COPY ./app /code/app

# Hugging Face Spaces mandates port 7860 execution
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "7860"]