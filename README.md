<img src="https://github.com/jannikr/measuring-station/blob/main/logo.png" alt="Ice Logo" title="Logo" align="right" height="60" />

# Measuring Station

![MIT](https://img.shields.io/badge/license-MIT-blue.svg)
[![Lint, Test, Build](https://github.com/jannikr/measuring-station/actions/workflows/node.js.yml/badge.svg)](https://github.com/jannikr/measuring-station/actions/workflows/node.js.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=jannikr_measuring-station&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=jannikr_measuring-station)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=jannikr_measuring-station&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=jannikr_measuring-station)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=jannikr_measuring-station&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=jannikr_measuring-station)

This project is based on Martin Fowler's [GUI Architectures article](https://martinfowler.com/eaaDev/uiArchs.html).

## Project Description

There is a government program that monitors the amount of ice cream particles in the atmosphere. If the concentration is too low, it indicates that the population is not eating enough ice cream - which poses a serious threat to the economy and public order.

To monitor the health of ice cream, the government has set up monitoring stations in every state. At random, a new station can be added automatically. Using complex atmospheric models, the agency sets a target for each monitoring station. At regular intervals, staff go to different stations and note the actual concentration of particulate matter in the ice cream.


## Architecture

The application consists of a fronted and a separate [backend](https://github.com/maximilianmilz/measuring-station-backend "Measuring Station Backend"). Data management takes place exclusively in the backend via a REST API. We use SpringBoot as the technology for this, because this framework specifies a strict multitier architecture and thus makes the backend more robust and clearer. As a relational database, we use MySql, one of the most widespread relational database management systems in the world.

The frontend is based on an MVC architecture with different components, each of which has its own purpose. We thus follow the coupling and cohesion principle. The frontend framework Angular is suitable for this approach.

## System Architecture

Throughout the project we have tried to develop a deployment pipeline that allows a high degree of automation. In this context, we decided to work with OS-level virtualisation. Docker is very popular in this area and offers us the possibility to develop our software system-independently and to scale it differently depending on the load on the servers. As a cloud computing provider, we use aws, the market leader in this field. The Docker containers with the different software components are executed on ec2 instances. To manage the database, we use RDS, a storage solution from aws with Multi-AZ option for high availability.

A detailed description is available [here](SYSTEM-ARCHITECTURE.md).


